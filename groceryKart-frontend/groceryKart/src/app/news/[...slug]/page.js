
const NewsDetailsPage = async({params}) => {

console.log(await params);

const slug = (await params).slug;
  return (
    <div className=" text-4xl">
        <header>Header</header>
    
    <ul>
        {slug.map((items) => (
            <li key ={items}>{items}</li>
        ))}
        </ul>
        </div>
  );
};

export default NewsDetailsPage