
const ProductPageById = async ({params, searchParams}) => {

    const id = (await params).id;
    const query = await searchParams;

  return (
    <div className="text-5xl">
      Product of id : {id}
      Filter : {query?.name}
      </div>
  )
};

export default ProductPageById