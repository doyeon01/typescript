import { Todo } from "../types"

interface Props extends Todo{
  onClickButton: (id:number) => void
}


export default function TodoItem(props:Props) {

  const onClickButton = () => {
    props.onClickButton(props.id)
  }
  return (
  <div>
    {props.id}번 : {props.content}
    <button onClick={onClickButton}>삭제</button>
  </div>
  )
}