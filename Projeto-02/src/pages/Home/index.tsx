import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

// controlled / uncontrolled

//  function register (name: string) {
//  return {
//     onChenge: () => void,
//     onBlur: () => void,
//     onFocus: () => void,
//  }
//  }

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  MinutesAmount: zod.number().min(5).max(60),
})

export const Home = () => {
  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
  })

  const handleCreateNewCycle = (data: any) => {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDesabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 2" />
            <option value="Projeto 4" />
          </datalist>

          <label htmlFor="minutesAmont">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmont"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmont', { valueAsNumber: true })}
          />

          <span>minutos</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDesabled} type="submit">
          <Play size={24} />
          começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
