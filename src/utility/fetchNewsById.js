const fetchNewsById = async ({ params }) => {
    const response = await fetch(`http://localhost:3000/api/news/${params.id}`);
    const data = await response.json();
    return data
};

export default fetchNewsById;