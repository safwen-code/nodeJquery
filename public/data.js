const etat = ['encour', 'cree', 'terminer']
const tab2 = [
  {
    id: 1,
    nomAction: 'a1',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
  {
    id: 2,
    nomAction: 'a2',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
  {
    id: 3,
    nomAction: 'a3',
    PA: 'pa1',
    date: '12/05/2022',
    StateId: 1,
  },
]

$(() => {
  const form = $('#form')
    .dxForm({
      // create data
      formData: {
        nomAction: '',
        PA: '',
        date: '',
        stateId: '',
      },

      colCount: 2,
      //configure item
      items: [
        'nomAction',
        'PA',
        {
          dataField: 'date',
          editorType: 'dxDateBox',
        },
        {
          dataField: 'stateId',
          editorType: 'dxSelectBox',
          labelMode: 'floating',
          editorOptions: {
            items: etat,
            value: '',
          },
        },
      ],
    })
    .dxForm('instance')

  const button = $('#button').dxButton({
    text: 'Submit',
    type: 'success',
    useSubmitBehavior: true,
  })

  $('#form-container').on('submit', (e) => {
    e.preventDefault()
    console.log('submitted')
    const froms = form.option('formData')
    console.log(froms)
    post(froms)
  })
  function post(froms) {
    const formData = {
      nomAction: froms.nomAction,
      PA: froms.PA,
      date: froms.date,
      state: froms.stateId,
    }

    //post
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: '/action/',
      data: JSON.stringify(formData),
      dataType: 'json',
      success: function (formData) {
        $('#post').html('post Action' + formData.nomAction)
      },
      error: function (e) {
        console.error(e.message)
        console.log('error in post')
      },
    })
  }
})
