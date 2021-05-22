import React from 'react'
import axios from 'axios'

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        axios({
            method: 'POST',
            url: 'http://localhost:3002/send',
            data: this.state,
        }).then((response) => {
            if (response.data.status === 'success') {
                alert('Message Sent.')
                this.resetForm()
            } else if (response.data.status === 'fail') {
                alert('Message failed to send.')
            }
        })
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    resetForm() {
        this.setState({ name: '', email: '', message: '' })
    }

    render() {
        return (
            <div className="lg:max-w-4xl mx-2 mt-16 lg:mt-32 flex justify-center lg:mx-auto ">
                <form
                    id="contact-form"
                    onSubmit={this.handleSubmit.bind(this)}
                    method="POST"
                    className="w-full max-w-md"
                >
                    <div className="mb-5">
                        <label
                            htmlFor="name"
                            className="flex text-xs lg:text-sm text-yellow-600 flex-col"
                        >
                            Vorname*
                            <input
                                type="text"
                                className="border-2 border-yellow-600 rounded-full py-2 px-3 text-grey-darkest"
                                id="name"
                                /* eslint-disable-next-line react/destructuring-assignment */
                                value={this.state.name}
                                onChange={this.onNameChange.bind(this)}
                            />
                        </label>
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="flex text-xs lg:text-sm text-yellow-600 flex-col"
                        >
                            E-mail Adresse*
                            <input
                                type="email"
                                className="border-2 border-yellow-600 rounded-full py-2 px-3 text-grey-darkest"
                                id="email"
                                aria-describedby="emailHelp"
                                /* eslint-disable-next-line react/destructuring-assignment */
                                value={this.state.email}
                                onChange={this.onEmailChange.bind(this)}
                            />
                        </label>
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="flex text-xs lg:text-sm text-yellow-600 flex-col"
                        >
                            Deine Nachricht*
                            <textarea
                                className="border-2 border-yellow-600 rounded-2xl py-2 px-3 text-grey-darkest"
                                rows="10"
                                id="message"
                                /* eslint-disable-next-line react/destructuring-assignment */
                                value={this.state.message}
                                onChange={this.onMessageChange.bind(this)}
                            />
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="font-Raleway text-white bg-yellow-600 rounded-full py-2 px-8"
                        >
                            Absenden
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact
