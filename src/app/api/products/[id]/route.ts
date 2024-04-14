import data from '../data.json';

interface ParamsRequestDTO {
  params: { id: string };
}

export const GET = async (_: Request, paramsRequest: ParamsRequestDTO) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = paramsRequest.params.id;
  const product = data.products.find((product) => product.id === Number(id));

  if (!product) {
    return Response.json({ message: 'Product not found.' }, { status: 400 });
  }
  return Response.json(product);
};
