import React from 'react'

import { Paper, TextField } from '@material-ui/core'
class SearchBar extends React.Component{
    state = {
SearchTerm: ''
    }

    handleChange = (e) =>{
        // console.log(e.target.value)
        this.setState({
            SearchTerm: e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const { SearchTerm } = this.state
        const { onFormSubmit } = this.props
        
        onFormSubmit(SearchTerm)
        console.log(SearchTerm)
    }
    render(){
        return(
            <Paper elevation={6} style={{padding: '20px', width:'50%', margin: 'auto'}}>
                <form onSubmit = {this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar