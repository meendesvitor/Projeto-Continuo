$(function() {
    $('#btnListar').on('click', function() {
            $.ajax({
                url: '/api/receitas',
                success: function(animal) {
                    let tbody = $('tbody');
                    tbody.html('');
                    animal.data.animal.forEach(animal => {
                        inserir = "<tr> <td>" + animal.nome + "</td> <td>" + animal.proprietario +
                            "</td><td>" + animal.endereco + "</td>  <td>" + animal.tipo + "</td> <td>" + animal.raca + " </td> <td>" + animal.imagem + "</td> </tr>";
                        tbody.append(inserir);
                    });
                }
            })
        })
        //nome, proprietario, endereco, tipo, raca, imagem
    $('#formAnimal').on('submit', (e) => {
        e.preventDefault();
        let nomeAnimal = $('#nomeAnimal');
        let nomeproprietario = $('nomeproprietario');
        let endereco = $('nomeproprietario');
        let tipo = $('nomeproprietario');
        let raca = $('nomeproprietario');

        $.ajax({
            url: 'api/Animal',
            method: 'POST',
            data: {
                nome: nomeAnimal.val(),
                proprietario: nomeproprietario.val(),
                endereco: endereco.val(),
                tipo: tipo.val(),
                raca: raca.val(),

            },
            success: function(response) {
                nomeAnimal.val('');
                $('#btnListar').click();
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
})