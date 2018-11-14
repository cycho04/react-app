import React from 'react';

const Input = (props) => {
        return(
            <form align='center' onSubmit={props.handleSubmit}>
                <label>
                Choose your tiles: 
                <select value={props.input1} onChange={props.userInput1}>
                    <option value='GJ3'>GeeJoon3</option>
                    <option value='GJ6'>GeeJoon6</option>
                    <option value='teen'>Teen</option>
                    <option value='dey'>Dey</option>
                    <option value='H8'>H8</option>
                    <option value='H4'>H4</option>
                    <option value='H10'>H10</option>
                    <option value='H6'>H6</option>
                    <option value='L4'>L4</option>
                    <option value='11'>11</option>
                    <option value='L10'>L10</option>
                    <option value='H7'>H7</option>
                    <option value='H7'>H7</option>
                    <option value='L6'>L6</option>
                    <option value='R9'>R9</option>
                    <option value='W9'>W9</option>
                    <option value='L8'>L8</option>
                    <option value='WL8'>WL8</option>
                    <option value='R7'>L7</option>
                    <option value='W7'>W7</option>
                    <option value='R5'>R5</option>
                    <option value='W5'>W5</option>
                </select>
                <select value={props.input2} onChange={props.userInput2}>
                    <option value='GJ3'>GeeJoon3</option>
                    <option value='GJ6'>GeeJoon6</option>
                    <option value='teen'>Teen</option>
                    <option value='dey'>Dey</option>
                    <option value='H8'>H8</option>
                    <option value='H4'>H4</option>
                    <option value='H10'>H10</option>
                    <option value='H6'>H6</option>
                    <option value='L4'>L4</option>
                    <option value='11'>11</option>
                    <option value='L10'>L10</option>
                    <option value='H7'>H7</option>
                    <option value='H7'>H7</option>
                    <option value='L6'>L6</option>
                    <option value='R9'>R9</option>
                    <option value='W9'>W9</option>
                    <option value='L8'>L8</option>
                    <option value='WL8'>WL8</option>
                    <option value='R7'>L7</option>
                    <option value='W7'>W7</option>
                    <option value='R5'>R5</option>
                    <option value='W5'>W5</option>
                </select>
                <select value={props.input3} onChange={props.userInput3}>
                    <option value='GJ3'>GeeJoon3</option>
                    <option value='GJ6'>GeeJoon6</option>
                    <option value='teen'>Teen</option>
                    <option value='dey'>Dey</option>
                    <option value='H8'>H8</option>
                    <option value='H4'>H4</option>
                    <option value='H10'>H10</option>
                    <option value='H6'>H6</option>
                    <option value='L4'>L4</option>
                    <option value='11'>11</option>
                    <option value='L10'>L10</option>
                    <option value='H7'>H7</option>
                    <option value='H7'>H7</option>
                    <option value='L6'>L6</option>
                    <option value='R9'>R9</option>
                    <option value='W9'>W9</option>
                    <option value='L8'>L8</option>
                    <option value='WL8'>WL8</option>
                    <option value='R7'>L7</option>
                    <option value='W7'>W7</option>
                    <option value='R5'>R5</option>
                    <option value='W5'>W5</option>
                </select>
                <select value={props.input4} onChange={props.userInput4}>
                    <option value='GJ3'>GeeJoon3</option>
                    <option value='GJ6'>GeeJoon6</option>
                    <option value='teen'>Teen</option>
                    <option value='dey'>Dey</option>
                    <option value='H8'>H8</option>
                    <option value='H4'>H4</option>
                    <option value='H10'>H10</option>
                    <option value='H6'>H6</option>
                    <option value='L4'>L4</option>
                    <option value='11'>11</option>
                    <option value='L10'>L10</option>
                    <option value='H7'>H7</option>
                    <option value='H7'>H7</option>
                    <option value='L6'>L6</option>
                    <option value='R9'>R9</option>
                    <option value='W9'>W9</option>
                    <option value='L8'>L8</option>
                    <option value='WL8'>WL8</option>
                    <option value='R7'>L7</option>
                    <option value='W7'>W7</option>
                    <option value='R5'>R5</option>
                    <option value='W5'>W5</option>
                </select>
                </label>
            <input type='submit' value='Submit' onClick={props.inputClick} />
        </form>
        )  
}
export default Input;