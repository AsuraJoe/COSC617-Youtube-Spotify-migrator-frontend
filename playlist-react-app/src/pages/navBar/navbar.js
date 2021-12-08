import { Component, useState } from "react"

function App(props) {

    

    function render_navBar_right_components(logged_in) {
        if (logged_in) {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/User"><span className="glyphicon glyphicon-user"></span> User</a></li>
                    <li><a href="/Logout"><span className="glyphicon glyphicon-log-out"></span> Logout</a></li>
                </ul>
            )
        } else {
            return (
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/Register"><span className="glyphicon glyphicon-list-alt"></span> Register</a></li>
                    <li><a href="/Login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
            )
        }
    }

    console.log("Props", props.user)

    return (
        <div >
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Playlist Converter!</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                    {render_navBar_right_components(props.user)}
                </div>
            </nav>
        </div>
    )

}