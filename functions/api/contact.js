export async function onRequestPost(context) {
  const formData = await context.request.formData()

  const name = formData.get('name')
  const email = formData.get('email')
  const phone = formData.get('phone')
  const year = formData.get('year')
  const problem = formData.get('problem')

  console.log({
    name,
    email,
    phone,
    year,
    problem,
  })

  return new Response(
    JSON.stringify({
      success: true,
      message: 'Form received successfully.',
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
}