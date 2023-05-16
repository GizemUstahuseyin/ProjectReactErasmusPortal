![Black Minimal Motivation Quote LinkedIn Banner](https://github.com/GizemUstahuseyin/ProjectKHASErasmusWebI/blob/main/images/readmebg.jpg)

# 🗺️ ProjectErasmusPortal
ERASMUS Portal - A simple website of the erasmus application for KHAS University Students.

## 📋 About
 -  This is a simple website
 -  Pure React.Js, JavaScript used
 
# WHAT IS A ROUTER?
A router is a structure used in web applications that enables users to be directed to different pages based on specific URLs. React Router is a router library designed for use in React applications. React Router tracks URL changes, loads the appropriate components, and replaces the current page. This gives the impression that the web application consists of a single page. React Router allows you to create a dynamic routing configuration using the <BrowserRouter> and <Route> components.<br/>
In summary, a Router is a component that manages navigation processes in React applications and is provided by the React Router library.<br/>

# USAGE OF ROUTER
Router was used in the prepared React project.<br/>
The BrowserRouter component manages all the routes of the application, and the Routes component defines all the routes of the application. Each route is specified within a Route component, with the path attribute indicating the URL and the element attribute indicating which component to render for that URL.<br/>
In this code block, the Sidebar component is displayed in all routes, and routes such as Anasayfa (Home), Basvurular (Applications), Duyurular (Announcements), etc., are defined. Each route ensures the rendering of the respective components based on their properties.<br/>
Additionally, the "Navigate" component is also used in the code. This component allows for redirecting to another route instead of a specific route.<br/>

# SIDEBAR
This is a React component that creates a sidebar containing navigation links and buttons. The Sidebar is triggered by a button located at the top of the screen and can be expanded or collapsed. The component also handles user authentication and displays appropriate navigation links and buttons based on whether the user is logged in or not (e.g., the user cannot access all components if not logged in, such as the Basvurular component).<br/>
The sidebar includes a title that contains the website's name and a toggle button to show or hide menu items. Menu items are conditionally processed based on whether the user is logged in or not. If the user is not logged in, only "Anasayfa" (Home) and "Kayıt Ol" (Register) menu items are displayed. If the user is logged in, all menu items are shown.<br/>
The component also includes a "Logout" function that removes the user's login status from the session storage and redirects them to the login page. If the user is logged in, an "Exit" button is displayed at the bottom of the sidebar. If the user is not logged in, "Kayıt Ol" (Register) and "Giriş Yap" (Login) buttons are shown.
Additionally, the Sidebar component utilizes icon packages.<br/>
The "npm install react-icons" command is used to install React Icons, a library that enables the usage of icons in React applications.<br/>
React Icons supports multiple icon sets and provides a component for each icon, allowing for easy usage of icons in React applications. Available icon sets include Font Awesome, Material Design Icons, Feather Icons, and many more.<br/>
After adding React Icons to your project, you can import and use the desired icon as a component. For example, you can call the Font Awesome React icon from the Font Awesome icon set using the code "import { FaReact } from 'react-icons/fa'". To access icons, visit https://react-icons.github.io/react-icons/.<br/>

# HOMEPAGE
This is a React component written in JavaScript using functional components. In this code, we add a conditional check based on the value of the "count" variable within the useEffect hook. If the value of "count" is greater than 0, we create a timer that decreases the "count" variable every 1 day. If the "count" value becomes 0, we stop the timer.<br/>
The return statement is used to remove the timer from the component. In this example, since the component will re-render whenever the timer changes, we need to add the "count" variable to the dependency array in the useEffect hook.<br/>
In the return section, we display a different message based on the value of the "count" variable. If the "count" value is greater than 0, we show the remaining days. If the "count" value is 0, we display the message "Time's up!".<br/>
In summary, this code snippet updates a counter variable inside the component and calculates the remaining time for each day.<br/>
Additionally, there is a text section providing information about the Erasmus Program, which is a European Union initiative promoting collaboration and exchange among higher education institutions and students from different countries.<br/>

# APPLICATIONS
This is a React component written in JSX syntax. The component appears to be a form for applying to a program called Erasmus. It imports React and useState libraries from the "react" module, as well as the ImAirplane icon from the "react-icons/im" module. It also imports a "withAuth" function from "../Functions," which is a custom function defined in a separate file.<br/>
The component defines a function called "Applications" that takes the "props" argument. Inside the function, there are several constants and functions defined using the "const" keyword. The first function is "toggleInput," which is called when the value of the "disability" select element changes. This function hides or shows the "disability reason" label and input element based on whether "Yes" or another value is selected in the "disability" select element.<br/>
The next constant is "input," which is a state variable associated with an empty string. The "setInput" function is also defined using the "useState" hook, which allows updating the "input" state variable. The "handleChange" function is similar to the "toggleInput" function and is called when the value of an input element changes. It updates the "input" state variable based on the name and value of the input element triggering the change event.<br/>
The following constant, "isPhysicalDisabilitySelected," checks whether the "physical_disability" property of the "input" state variable is set to "Yes."
When the form is submitted, the "submit" function is called. It retrieves the values of various input elements using the "getElementById" method and stores them in a variable called "user_info." Then, it saves this variable in the "sessionStorage" object and displays a notification to the user.<br/>
When the form is successfully submitted, the "showApplication" function is called. It waits for one second using the "setTimeout" function and redirects the user to the "/ApplicationInformation" URL.<br/>

# APPLICATION INFORMATION
The code is written in JavaScript using the React library. It represents a functional component called "ApplicationInformation" that displays application information to the user.<br/>
The component retrieves user information from the session storage and splits it into an array. Then, it displays the information in an unordered list format with different headings for each information category using JSX.<br/>
The displayed information includes personal details such as name, gender, nationality, and chronic illness, address details such as country, city, and postal code, education details such as university name, graduation status, and overall grade average, and document details such as resume and documents.<br/>
In general, the code is part of a larger application that requires authentication to access personalized information about the user.<br/>

# REGISTRATION
This code is a React component that creates a registration form allowing a user to create an account.<br/>
The code defines a function called "sifreKontrol" that takes the user's entered email address and password and creates an array. It also retrieves the re-entered password from the user. Then, it checks if the entered passwords match. If the passwords match, it saves the user information using "sessionStorage" and redirects the user to a page where they can log in. If the passwords don't match, it displays an error message to the user and keeps them on the registration page.<br/>
Another function called "Kayit_form" is defined, which is responsible for creating the form within the component. Inside this function, there are input fields for the email address, password, and password confirmation, a "Create Account" button, and a field to display an error message. Additionally, there is an image displayed on the left side of the form.<br/>

# LOGIN
This code is part of a React application and provides a form for users to log in. It is within a function component called "Giris_form" and includes an image and a login form as the visual elements.<br/>
The form requires the user to enter their email address and password. The user needs to click the "Login" button to log in. If the entered information is correct, the page updates with a green text saying "Logged in!" and redirects to the "/Homepage" page after one second. If the entered information is incorrect, the page updates with a red text saying "Check your email or password!" and redirects to the "/Login" page after one second. Additionally, clicking the "Change Password" button triggers the "sifreGuncelle" function, allowing the user to update their password.<br/>
The code stores the user's login status and other information using sessionStorage. It imports files and libraries such as react-dom/client and ../images/signin.jpg.

# PASSWORD UPDATE
This code contains a React component named "SifreGuncelle," designed for updating the user's password within a React application. The component includes a form where the user needs to enter their current password, new password, and confirm the new password. The user's current password is retrieved from a user object stored in "sessionStorage." If the new password and its confirmation match, the new password replaces the current password in the user object, and a successful update is reported. Otherwise, an error message is displayed, and the page is reloaded. The component also includes an image and is styled using the Bootstrap library.<br/>

# PROFILE
This code is a React component representing a profile page. The component includes a form that allows the user to update their personal information and profile picture.
The loadFile function is used to display the selected image in the profile picture field. The selected image is displayed using the selected image.<br/>
The handleChange function is used to update the login status when a user enters input in a form field.
The submitFonk function is used to log the login status to the console when the form is submitted.<br/>
The profilBilgigonder function is used to retrieve the user's input from the form and store it in sessionStorage. It also displays an alert to inform the user that their information has been saved.<br/>
HTML elements in the code are styled using Bootstrap classes.<br/>

# PROFILE INFORMATION
This code is a React component written in React. It contains a function component named "ProfileInformation."<br/>
The "withAuth" function wraps the component with an authentication component to check if the user is logged in. If the user is not logged in, the component is not displayed, and the user is prompted to log in.<br/>
Inside the component, it reads a variable named "person_info" from the "sessionStorage" object to create an array that contains the user's personal information. This array is then displayed using "span" tags in the HTML.<br/>
Bootstrap classes like "container," "row," and "col" are used to define the component's style properties. The "h1" tag is used as a heading to create a large title at the top of the page. The list items inside the "ul" tag are created using "li" tags and grouped under three headings: personal information, address details, and contact information.<br/>
The rest of the component includes the personal, address, and contact information to be displayed. These details are retrieved from the "info_array" array and displayed within the respective "span" tags. The "hr" tag is used to separate the information under each heading.<br/>

# WITHAUTH
This code returns a function using a design pattern called Higher Order Component (HOC) to check if the user is logged in for authentication purposes. The withAuth function takes the "Applications" component as a parameter and returns a new component.<br/>
The returned component receives the "Applications" component and its props if the user is logged in. If the user is not logged in, it prevents the user from being redirected to the Applications, ApplicationInformation, Profile, and ProfileInformation pages.<br/>
In the code, the useNavigate function is imported from the React Router DOM library, allowing the program to perform routing and enabling the user to navigate to different pages. The navigate function redirects the user to a specific URL.<br/>

# REQUIRED LIBRARIES TO BE INSTALLED
• npm install react-router-dom
REACT-ROUTER-DOM: A library for implementing routing in React applications.
• npm install webfontloader
WEBFONTLOADER: A library for dynamically loading web fonts.
• npm install bootstrap
BOOTSTRAP: A popular CSS framework for creating responsive and mobile-first websites.
• npm install react-icons
REACT-ICONS: A library providing a collection of popular icons that can be used in React applications.

# EXAMPLES OF USESTATE USAGE

- Collapsible Sidebar
  
  
## 👓 Preview
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portal.gif" width="75%">
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portalreadme.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portalreadme1.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portalreadme2.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portalreadme3.jpg" width="75%">
<img src="https://github.com/GizemUstahuseyin/ReactErasmusPortal/blob/main/images/portalreadme4.jpg" width="75%">


## 🙏 Support
This project needs a ⭐️ from you. Don't forget to leave a star ⭐️

