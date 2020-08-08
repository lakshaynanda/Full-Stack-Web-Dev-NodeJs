$(()=>{
    $('#prepend').click(() => {
        let text=$('#item').val()
        $('#list').prepend(`<li>${ text }</li>`)
    })
    $('#append').click(() => {
        let text=$('#item').val()
        $('#list').append(`<li>${ text }</li>`)
    })
})