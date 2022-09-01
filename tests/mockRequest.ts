export const mockRequest = (
  id: number = 1,
  page: number = 0,
  perPage: number = 20,
  title: string = "Título do conteúdo",
  body: string = "Corpo de exemplo"
) => {
  return {
    params: { id: id },
    query: { page: page, perPage: perPage },
    body: { title: title, body: body },
  }
}
