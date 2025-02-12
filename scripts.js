/* Global Styles */
:root {
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
--background-color: #f5f6fa;
--text-color: #2c3e50;
}

- {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
font-family: 'Open Sans', sans-serif;
line-height: 1.6;
color: var(--text-color);
background-color: var(--background-color);
}

/* Header Styles */
header {
background-color: var(--primary-color);
color: white;
padding: 1rem 0;
position: sticky;
top: 0;
z-index: 100;
}

header h1 {
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 1.8rem;
margin-bottom: 1rem;
}

nav ul {
display: flex;
justify-content: center;
list-style: none;
flex-wrap: wrap;
}

nav ul li {
margin: 0 1rem;
}

nav ul li a {
color: white;
text-decoration: none;
padding: 0.5rem 1rem;
border-radius: 4px;
transition: background-color 0.3s;
}

nav ul li a:hover {
background-color: var(--secondary-color);
}

/* Main Content Styles */
main {
max-width: 1200px;
margin: 2rem auto;
padding: 0 1rem;
}

.seccion {
background-color: white;
border-radius: 8px;
padding: 2rem;
margin-bottom: 2rem;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.seccion.active {
display: block;
}

.seccion:not(.active) {
display: none;
}

h2 {
color: var(--primary-color);
margin-bottom: 1.5rem;
font-family: 'Roboto', sans-serif;
}
