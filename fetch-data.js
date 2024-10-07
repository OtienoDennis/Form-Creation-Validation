async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById( "api-data" );
    try {
        const response = await fetch( apiUrl );
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement( 'ul' );
        users.forEach(user => {
            let lst = document.createElement( 'li' );
            lst.textContent = user.name;
            userList.append(lst)
        } );
        dataContainer.append( userList );
    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'
    }
}

document.addEventListener('DOMContentLoaded', fetchUserData)