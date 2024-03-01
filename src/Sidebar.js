import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="si d-flex justify-content-space-between flex-col w-40 h-100 bg-slate-950 text-white p-2 ">
            <div>
                <a href="" className="d-flex align-item-center">
                    <span className='fs-4 font-black text-xl pt-3'>Sidebar</span>
                </a>
                <hr className="text-secondary" />

                <ul className="nav nav-pills flex-col">
                    <li className="nav-item p-3">
                        <Link to="/" className="nav-link">
                            <span className="fs-5 pb-10">Dashboard</span>
                        </Link>
                    </li>

                    <li className="  nav-item p-3">
                        <Link to='/Home' className="nav-link">
                            <span className='fs-5'>Home</span>
                        </Link>
                    </li>

                    <li className="  nav-item p-3">
                        <Link to='/Skill' className="nav-link">
                            <span className="fs-5">Skills</span>
                        </Link>
                    </li>

                    <li className=" ss nav-item p-3">
                        <Link to='/Project' className="nav-link">
                            <span className='fs-5'>Project</span>
                        </Link>
                    </li>

                    <li className='hh nav-item p-3'>
                        <Link to='/Contact' className='nav-link'>
                            <span className='fs-5'>Contact</span>
                        </Link>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5 text-balck'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li><li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>

                    <li className='nav-item p-3'>
                        <a href='' className='nav-link'>
                            <span className='fs-5'></span>
                        </a>
                    </li>
                    


                </ul>
            </div>
            <div>
                <hr className='text-secondary' />
                <span className='m- pl-10'>Github</span>
            </div>
        </div>
    )
}

export default Sidebar
