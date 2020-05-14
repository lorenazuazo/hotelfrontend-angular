//para ocultar los formularios
function Ocultar(id){
    document.getElementById(id).style.display = "none";
}

$(document).ready(function () {
    $('#ListDataTable').DataTable({
        "language": {
            "decimal": "",
            "emptyTable": "No hay datos disponibles",
            "info": "_TOTAL_ registros encontrados",
            "infoEmpty": "No hay datos disponibles.",
            "infoFiltered": "(_MAX_ registros totales)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "_MENU_ registros",
            "loadingRecords": "Buscando...",
            "processing": "Procesando...",
            "search": "Buscar:",
            "zeroRecords": "Registro no encontrado",
            "paginate": {
                "first": "Primero",
                "last": "Ultimmo",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }
    });
});