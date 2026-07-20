# React Exercícios

Repositório de estudos e prática de React, criado durante o processo de aprendizagem do framework, com foco em preparação para uma vaga de estágio em front-end.

## Sobre

Aqui ficam os exercícios feitos ao longo do roadmap de React: hooks, listas e keys, renderização, componentes de ordem superior (HOC), render props, entre outros temas trabalhados durante os estudos.

## Estrutura

Os componentes de cada exercício ficam dentro de `src/components/`, e são renderizados trocando o import correspondente no `App.jsx`.

```
src/
  components/
    Componente1.jsx
    Componente2.jsx
    ...
```

> Observação: essa estrutura (todos os componentes numa pasta só) tornou a busca por exercícios mais difícil conforme o repositório cresceu. Os próximos exercícios seguem organizados por pasta em um novo repositório (`react-labs`), com uma pasta dedicada para cada exercício.

## Tópicos praticados

- `useState` (incluindo forma funcional de atualização)
- `useEffect` (dependências, cleanup, padrão assíncrono)
- `useRef`
- `useContext` (Context API completa: criação, Provider, consumo)
- Lists e Keys
- Render Props
- Higher Order Components (HOC)

## Convenções de código

- Arrow functions com destructuring de props no parâmetro
- `export default` ao final do arquivo
- Retorno implícito quando o corpo da função é uma única expressão JSX
- `async/await` para código assíncrono
- Commits seguindo [Conventional Commits](https://www.conventionalcommits.org/)

## Tecnologias

- React
- Vite

---

Projeto pessoal de estudos, sem fins comerciais.
