import React, { Component } from "react";
import { Modal } from "bootstrap";
import axios from "axios";

class Pegawai extends Component {
  constructor() {
    super();
    this.state = {
      pegawai: [],
      nip: "",
      nama: "",
      alamat: "",
      action: "",
      search: "",
      modal:null
    };
  }

 
  bind = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  Add = () => {
    this.state.modal.show();

    this.setState({
      nip: "",
      nama: "",
      alamat: "",
      action: "insert",
    });
  };

  Edit = (item) => {
    this.state.modal.show();

    this.setState({
      nip: item.nip,
      nama: item.nama,
      alamat: item.alamat,
      action: "update"
    });
  };

  getPegawai = () => {
    let url = "http://localhost:2910/pegawai";
    axios
      .get(url)
      .then(response => {
        this.setState({ pegawai: response.data.pegawai });
      })
      .catch(error => {
        console.log(error);
      });
  };

  findPegawai = (event) => {
    let url = "http://localhost:2910/pegawai";
    if (event.keyCode === 13) {
      let form = {
        find: this.state.search
      };

      axios
        .post(url, form)
        .then((response) => {
          this.setState({ pegawai: response.data.pegawai });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  SavePegawai = (event) => {
    event.preventDefault();

    let url = "";
    if (this.state.action === "insert") {
      url = "http://localhost:2910/pegawai/save";
    } else{
      url = "http://localhost:2910/pegawai/update";
    } 

    let form = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat,
    };

    axios.post(url, form)
      .then((response) => {
        this.getPegawai();
      })
      .catch(error => {
        console.log(error);
      });

    this.state.modal.hide();
  };

  Drop = (nip) => {
    let url = "http://localhost:2910/pegawai/" + nip;
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      axios
        .delete(url)
        .then((response) => {
          this.getPegawai();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  componentDidMount() {
    this.setState({
      modal: new Modal(document.getElementById('modal_pegawai'))
    });
    this.getPegawai();
  }


  render() {
    return (
      <div className="m-3 card">
        <div className="card-header bg-info text-white">Data Pegawai</div>
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-2"
            name="search"
            value={this.state.search}
            onChange={this.bind}
            onKeyUp={this.findPegawai}
            placeholder="Pencarian..."
          />

          {/* TABLE PEGAWAI */}
          <table className="table">
            <thead>
              <tr>
                <th>NIP</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {this.state.pegawai.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.nip}</td>
                    <td>{item.nama}</td>
                    <td>{item.alamat}</td>
                    <td>
                      <button className="btn btn-sm btn-info m-1"
                        onClick={() => this.Edit(item)}>
                        Edit
                      </button>
                      <button className="btn btn-sm btn-danger m-1"
                        onClick={() => this.Drop(item.nip)}>
                        Hapus
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button className="btn btn-success" onClick={() => this.Add()}>
            Tambah Data
          </button>

          {/* MODAL FORM PEGAWAI */}
          <div className="modal fade" id="modal_pegawai">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">Form Pegawai</div>
                <div className="modal-body">
                  <form onSubmit={(ev) => this.SavePegawai(ev)}>
                    NIP
                    <input
                      type="number"
                      name="nip"
                      value={this.state.nip}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Nama
                    <input
                      type="text"
                      name="nama"
                      value={this.state.nama}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    Alamat
                    <input
                      type="text"
                      name="alamat"
                      value={this.state.alamat}
                      onChange={this.bind}
                      className="form-control"
                      required
                    />
                    <div className="modal-footer">
                    <button className="btn btn-sm btn-success" type="submit">
                      Simpan
                    </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // componentDidMount() {
  //   this.setState({
  //     modal: Modal.getOrCreateInstance('#modal_pegawai')
  //   });
  //   this.getPegawai();
  // }

}

export default Pegawai;
