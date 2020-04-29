import React,{InputHTMLAttributes,useEffect,useRef,useState,useCallback} from 'react';
import {Container,Error} from './styles';
import {IconBaseProps} from 'react-icons';
import {FiAlertCircle} from 'react-icons/fi';
import {useField} from '@unform/core';




interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    name:string;
    icon?: React.ComponentType<IconBaseProps>
   
}

const Input: React.FC<InputProps>= ({name,icon:Icon,...rest})=> {
    const InputRef=useRef<HTMLInputElement>(null);
    const [isFocused,setIsFocused]= useState(false)
    const [isFilled,setIsFilled]= useState(false);
    const {fieldName,defaultValue,error,registerField}= useField(name);

    const handleFunctionBlur = useCallback( ()=> {
        setIsFocused(false);
        setIsFilled(!!InputRef.current?.value);
    },[])

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: InputRef.current,
            path: 'value'
        })
    },[fieldName,registerField])



    return(  <Container isErrored= {!!error} isFilled={isFilled} isFocused={isFocused}>
        {Icon&& <Icon size={20}/>}
        <input 
        onFocus= {()=> setIsFocused(true)}
        onBlur={handleFunctionBlur}
        defaultValue={defaultValue} 
        ref={InputRef}{...rest}/>
        {error && (<Error title={error}>
            <FiAlertCircle color= '#c53030' size={20}/>
        </Error>)}
    </Container>
)
}


export default Input;