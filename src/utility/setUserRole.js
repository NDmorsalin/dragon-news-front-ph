const setUserRole = async (userId, role = 'user') => {
    const response = await fetch(`http://localhost:3000/api/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId, role })
    });
    const data = await response.json();
    // console.log(data);
    return data
};

export default setUserRole;