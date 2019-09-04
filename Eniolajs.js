console.log('It works')

$(document).ready(function () {
    $('#submit').click(function (event) {
    
    console.log('clicked button')
    
    var fullName = $('#name').val()
    var email = $('#email').val()
    var title = $('#title').val()
    var message = $('#message').val()
    var statusElm = $('.status')
    statusElm.empty()


    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
    }

    if(fullName.length > 4){
        statusElm.append('<div>Name is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Name is not valid</div>')
    }

    if (message.length > 20){
        statusElm.append('<div>Messaage is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Message should be more than 20 characters</div>')
    }
})
}) 