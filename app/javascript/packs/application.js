import WebpackerReact from 'webpacker-react'
import Container from './components/container/Container'
import Forbidden from './components/forbidden/forbidden'
import Home from './components/home/home'
import TemporaryContainer from './components/temporaryContainer/TemporaryContainer'

// import * as bootstrap from 'bootstrap'
// document.addEventListener("DOMContentLoaded", function(event) {
//   var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
//   var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl)
//   })
// })

WebpackerReact.setup({Container, Forbidden, Home, TemporaryContainer})