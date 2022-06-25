import { GlobalStore } from '../../hooks/use-store';

export default function FormBoard() {
  const { runState } = GlobalStore.useContainer();
  return (
    <>{runState}</>
  )
}