import React from "react";
import { iconLogo } from '../../assets'
import { AdminMenu, Logout } from "../../components/Admin/AdminLayout";
import './AdminLayout.scss'

export function AdminLayout(props) {
    const { children } = props
    return (
        <div className="admin-layout">
            <div className="admin-layout__left">
                <img src={iconLogo} className="logo" />
                <AdminMenu />
            </div>
            <div className="admin-layout__right">
                <div className="admin-layout__right-header">
                    <Logout />
                </div>
                <div className="admin-layout__right-conten">{children}</div>t
            </div>
        </div>
    )
}