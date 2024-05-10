"use client";
import { Accordion } from "flowbite-react";

const Blogs = () => {
    return (
        <div className="mt-14">
            <h2 className="text-sky-500 text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center">Frequently Asked Question</h2>
            <div className="border-t-2 border-sky-800 w-4/6 mx-auto mt-1 mb-14"></div>
            <div className="lg:mx-[140px]">
                <Accordion collapseAll>
                    <Accordion.Panel className="">
                        <Accordion.Title className="bg-sky-200 hover:bg-sky-50 divide-black">What is an access token and refresh token?</Accordion.Title>
                        <Accordion.Content>
                            <span className="text-lg font-bold underline">Access Token-</span>
                            <p className="font-bold ">Access tokens are akin to temporary passes, providing authenticated users or applications with access to specific resources on a server. They act as short-lived credentials, typically issued after a successful authentication process. These tokens carry a predetermined expiration time, often ranging from minutes to hours. When a user or application requests access to protected resources, the access token is included in the request to verify authorization.</p>
                            <br />
                            <span className="text-lg font-bold underline">Refresh Token-</span>
                            <p className="font-bold ">
                                Refresh tokens play a distinct role in maintaining seamless access to resources. Unlike access tokens, refresh tokens are long-lived credentials issued alongside the initial access token during authentication. They serve as a key to obtaining new access tokens without necessitating the user to reauthenticate every time the current access token expires. Also if refresh token expires then user have to login again.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-sky-100 hover:bg-sky-50">How do access and refresh token work and where should we store them on the client side?</Accordion.Title>
                        <Accordion.Content>
                            <span className="text-lg font-bold underline">How they work-</span>
                            <p className="font-bold ">
                                Access tokens and refresh tokens collaborate in token-based authentication. Initially, during authentication, the server issues both tokens. The access token, serving as authentication proof, accompanies subsequent requests to access protected resources. Refresh tokens come into play when the access token expires. They allow the client to request a new access token without requiring the user to log in again.
                            </p>
                            <br />
                            <span className="text-lg font-bold underline">How to store-</span>
                            <p className="font-bold ">
                                Store access tokens securely on the client side, such as in memory or browser sessionStorage, for easy accessibility. For refresh tokens, prioritize security by storing them in cookies with "HttpOnly" and "Secure" flags, or in secure mechanisms like localStorage (with precautions against XSS attacks).
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-sky-200 hover:bg-sky-50">What is express js?</Accordion.Title>
                        <Accordion.Content>
                            <p className="font-bold ">
                                Express.js is a web application framework for Node.js, simplifying the process of building web servers. It provides features for routing, middleware support, and handling HTTP requests and responses, making it popular for building web applications and APIs.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="bg-sky-100 hover:bg-sky-50">What is Nest JS?</Accordion.Title>
                        <Accordion.Content>
                            <p className="font-bold ">
                                NestJS is a Node.js framework inspired by Angular, ideal for building scalable, efficient server-side applications. It uses TypeScript and offers features like modularity, dependency injection, and support for multiple transport layers.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;