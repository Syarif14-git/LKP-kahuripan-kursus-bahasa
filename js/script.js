$(function () {
  $(".tombolTambahData").on("click", function () {
    $("#formJudulLabel").html("Tambah Data Mahasiswa");
    $(".tombolSubmit").html("Tambah");
    $("#nama").val("");
    $("#nrp").val("");
    $("#email").val("");
    $("#jurusan").val("");
  });

  $(".tampilModalUbah").on("click", function () {
    $("#formJudulLabel").html("Ubah Data Mahasiswa");
    $(".modal-footer button[type=submit]").html("Ubah");
    $(".modal-body form").attr("action", "http://localhost/phpmvc/public/mahasiswa/ubah");

    const id = $(this).data("id");

    $.ajax({
      url: "http://localhost/phpmvc/public/mahasiswa/getubah",
      data: { id: id },
      method: "post",
      dataType: "JSON",
      success: function (data) {
        $("#nama").val(data.nama);
        $("#nrp").val(data.nrp);
        $("#email").val(data.email);
        $("#jurusan").val(data.jurusan);
        $("#id").val(data.id);
      },
    });
  });
});
