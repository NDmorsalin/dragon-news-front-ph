const fetchNewsByCategory = async ({ params }) => {
    const response = await fetch(`http://localhost:3000/api/category/${params.id}`);
    const data = await response.json();
    return data
};

export default fetchNewsByCategory;