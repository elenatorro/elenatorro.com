export default async (request, context) => {
  return context.json({
    geo: context.geo,
    header: request.headers.get("x-nf-geo"),
  })
}