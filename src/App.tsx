import React from 'react'
import './App.css'

// Components
import Card from './component/Card'
import ControlPanel from './component/ControlPanel'

type PropsType = {}
type StateType = {
  email: string,
  image: string,
  name: string,
  job: string,
  department: string,
  company: string,
  phone: string,
  address: string,
  website: string,
  links: string[]
}

interface App {
  props: PropsType,
  state: StateType
}

class App extends React.Component {
  constructor(props: PropsType) {
    super(props)

    this.state = {
      email: "",
      image: "",
      name: "",
      job: "",
      department: "",
      company: "",
      phone: "",
      address: "",
      website: "",
      links: []
    }

    this.infoOnChange = this.infoOnChange.bind(this)
  }

  infoOnChange(key: string, value: string | string[]): void {
    switch (key) {
      case "email": this.setState({ email: value }); break
      case "image": this.setState({ image: value }); break
      case "name": this.setState({ name: value }); break
      case "job": this.setState({ job: value }); break
      case "department": this.setState({ department: value }); break
      case "company": this.setState({ company: value }); break
      case "phone": this.setState({ phone: value }); break
      case "address": this.setState({ address: value }); break
      case "website": this.setState({ website: value }); break
      case "links": {
        let links: string[] = [...value]
        this.setState({ links })
      }; break;
    }
  }

  render(): React.ReactNode {
    return (
      <div id='app' className='w-full h-full flex flex-col justify-center items-center bg-gray-50'>
        <div id='title' className='w-full h-40 flex justify-center items-center font-bold text-4xl'>SignCard</div>
        <div id='container' className='w-full h-full max-h-[50rem] xl:w-5/6 2k:w-2/3 md:h-[calc(100%-10rem)] lg:pb-16 flex flex-col md:flex-row'>
          <ControlPanel change={this.infoOnChange}></ControlPanel>
          <Card name={this.state.name} email={this.state.email} phone={this.state.phone} image={this.state.image} address={this.state.address} website={this.state.website} links={this.state.links} job={this.state.job} company={this.state.company} department={this.state.department}></Card>
        </div>
      </div>
    )
  }
}

export default App
