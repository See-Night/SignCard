import React from "react"
import './ControlPanel.css'

type PropsType = {
    change: (key: string, value: string | string[]) => void
}
type StateType = {
    links: string[],
}

interface ControlPanel {
    props: PropsType,
    state: StateType
}
class ControlPanel extends React.Component {
    constructor(props: PropsType) {
        super(props)

        this.state = {
            links: []
        }
    }

    loadImage() {
        let image = document.getElementById("image")
        image?.click()
    }

    changeFile(files: any) {
        let image = files[0]
        let url: string = ""
        if (window.URL != undefined) {
            url = window.URL.createObjectURL(image)
        } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(image)
        }

        this.props.change("image", url)
    }

    render(): React.ReactNode {
        return (
            <div className='control_panel h-auto md:h-full w-full md:w-1/2 md:pl-8 md:pr-4 lg:px-16 md:py-6'>
                <div className="md:bg-white w-full h-full md:rounded-3xl text-sm md:shadow-2xl p-4 md:p-8 lg:p-12 md:text-base lg:text-xl font-bold">
                    <div className="overflow-y-auto w-full h-full">
                        <div className="w-full flex flex-row items-center">
                            <label htmlFor="name" className="w-14 md:w-16 lg:w-24">Name</label>
                            <input spellCheck="false" type="text" id="name" className="ml-2 lg:ml-4 font-normal text-sm md:text-base px-4 py-2 lg:py-3 w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" onChange={(e) => this.props.change("name", e.target.value)} />
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label htmlFor="job" className="w-14 md:w-16 lg:w-24">Job</label>
                            <div className="w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] grid grid-cols-3 ml-2 lg:ml-4 gap-x-2">
                                <input spellCheck="false" type="text" name="job" className="font-normal text-sm md:text-base px-4 py-2 lg:py-3 outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" placeholder="Job" onChange={(e) => { this.props.change("job", e.target.value) }} />
                                <input spellCheck="false" type="text" name="department" className="font-normal text-sm md:text-base px-4 py-2 lg:py-3 outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" placeholder="Department" onChange={(e) => { this.props.change("department", e.target.value) }} />
                                <input spellCheck="false" type="text" name="company" className="font-normal text-sm md:text-base px-4 py-2 lg:py-3 outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" placeholder="Company" onChange={(e) => { this.props.change("company", e.target.value) }} />
                            </div>
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label htmlFor="email" className="w-14 md:w-16 lg:w-24">Email</label>
                            <input spellCheck="false" type="text" name="email" className="ml-2 lg:ml-4 font-normal text-sm md:text-base px-4 py-2 lg:py-3 w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" placeholder="example@email.com" onChange={(e) => { this.props.change("email", e.target.value) }} />
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label className="w-14 md:w-16 lg:w-24">Image</label>
                            <input spellCheck="false" id="image" name="image" accept="image/*" type="file" className="ml-2 lg:ml-4 font-normal hidden" onChange={(e) => this.changeFile(e.target.files)} />
                            <button className="px-4 py-2 ml-2 lg:ml-4 text-sm md:text-base bg-gray-400 rounded-md text-white hover:bg-gray-500 shadow-md" onClick={() => this.loadImage()}>Load from file</button>
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label htmlFor="phone" className="w-14 md:w-16 lg:w-24">Phone</label>
                            <input spellCheck="false" type="text" id="phone" className="ml-2 lg:ml-4 font-normal text-sm md:text-base px-4 py-2 lg:py-3 w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" onChange={(e) => this.props.change("phone", e.target.value)} />
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label htmlFor="address" className="w-14 md:w-16 lg:w-24">Address</label>
                            <input spellCheck="false" type="text" id="address" className="ml-2 lg:ml-4 font-normal text-sm md:text-base px-4 py-2 lg:py-3 w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" onChange={(e) => this.props.change("address", e.target.value)} />
                        </div>
                        <div className="w-full flex flex-row items-center mt-4 md:mt-8">
                            <label htmlFor="website" className="w-14 md:w-16 lg:w-24">Website</label>
                            <input spellCheck="false" type="text" id="website" className="ml-2 lg:ml-4 font-normal text-sm md:text-base px-4 py-2 lg:py-3 w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)] outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" onChange={(e) => this.props.change("website", e.target.value)} />
                        </div>
                        <div className="w-full block mt-4 md:mt-8">
                            <div className="w-full flex flex-row items-start">
                                <label htmlFor="link" className="w-14 md:w-16 lg:w-24 leading-[3rem]">Links</label>
                                <div className="ml-2 lg:ml-4 font-normal text-sm md:text-base w-[calc(100%-4.5rem)] md:w-[calc(100%-5rem)] lg:w-[calc(100%-7rem)]">
                                    {
                                        this.state.links.map((link, index) => {
                                            return <input spellCheck="false" type="text" name={"link_" + index} key={index} className="mb-4 px-4 py-2 lg:py-3 w-full outline-none shadow-inner bg-gray-200 md:bg-gray-100 rounded-lg" onChange={(e) => {
                                                this.state.links[index] = e.target.value
                                                this.props.change("links", this.state.links)
                                            }} />
                                        })
                                    }
                                    <button className="text-sm md:text-base px-4 py-2 text-white bg-gray-400 rounded-lg shadow-lg hover:bg-gray-500" onClick={() => {
                                        this.state.links.push("")
                                        let links: string[] = [...this.state.links]
                                        this.setState({
                                            links
                                        })
                                    }}>Add</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ControlPanel