import {useState} from 'react';

const initialVal = '';

function useInput(initialVal: string) {
  const [val, setVal] = useState('');

  const handleChange = (e:any ) => {
    setVal(e.target.value)
  }
  const reset = () => {
    setVal('')
  }
  return [val, handleChange, reset]
}

export default useInput;