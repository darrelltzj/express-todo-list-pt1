$(document).ready(function () {
  $('#put-form').on ('submit', function (e) {
    e.preventDefault()
    let element = $(this)
    let url = element.attr('action')
    let data = element.serialize()
    console.log(element, url, data)
    $.ajax({
      method: 'PUT',
      url: url,
      data: data
    }).done(function () {
      // get data returned from the PUT route
      // console.log(data)

      // do stuff when the PUT action is complete
      // element.remove()

      // or, you can redirect to another page
      window.location = url
    }).fail(function() {
      console.log('err')
    })
  })
})
