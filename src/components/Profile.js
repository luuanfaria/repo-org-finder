import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'

const Profile = ({ data }) => {
    return (
        <div className="profile">
            <div className="profile-card">
                <div className="Image">
                    <Image src={data.avatar_url} rounded />
                </div>
                <div className="profile-info">
                    <h1>{data.name}</h1>
                    <p>{data.description}{data.bio}</p>
                    <p>
                        <svg class="octicon octicon-location flex-shrink-0" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                            <path fill="#f4f5f6" fill-rule="evenodd" d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z">
                            </path>
                        </svg>
                        {data.location}
                    </p>
                </div>
            </div>
            <div className="profile-info-repo">
                <ListGroup horizontal>
                    <ListGroup.Item>
                        <svg class="octicon octicon-repo UnderlineNav-octicon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
                         <path fill="#f3f4f6" fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                         </path>
                        </svg>
                        Repositorios <span>{data.public_repos}</span> 
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Profile
