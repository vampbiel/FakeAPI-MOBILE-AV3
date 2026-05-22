# Cartão Digital de Identificação - Ionic + Angular

Este é um projeto de **Cartão Digital de Identificação** desenvolvido com **Ionic** e **Angular**, convertido do projeto original que utilizava **Ionic + React**.

## 📱 Funcionalidades

- **Página Home**: Exibe um cartão digital com informações do estudante (foto, matrícula, turma, unidade e turno)
- **Página About**: Apresenta informações sobre o estudante, sua jornada acadêmica, interesses e objetivos profissionais
- **Navegação**: Transição suave entre as páginas
- **Design Responsivo**: Otimizado para diferentes tamanhos de tela
- **Tema Moderno**: Gradiente de cores roxo/azul com animações suaves

## 🛠️ Tecnologias Utilizadas

- **Angular 19+**: Framework frontend moderno
- **Ionic 8+**: Framework para aplicações mobile híbridas
- **TypeScript**: Linguagem de programação tipada
- **SCSS**: Pré-processador CSS para estilos avançados
- **Capacitor**: Para integração com plataformas nativas (iOS/Android)

## 📦 Instalação

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou pnpm

### Passos

1. **Instalar dependências**:
   ```bash
   npm install
   # ou
   pnpm install
   ```

2. **Executar em desenvolvimento**:
   ```bash
   ionic serve
   ```

3. **Acessar no navegador**:
   Abra `http://localhost:8100` no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── home/
│   │   ├── home.page.html      # Template da página Home
│   │   ├── home.page.ts        # Lógica da página Home
│   │   ├── home.page.scss      # Estilos da página Home
│   │   └── home.page.spec.ts   # Testes da página Home
│   ├── about/
│   │   ├── about.page.html     # Template da página About
│   │   ├── about.page.ts       # Lógica da página About
│   │   ├── about.page.scss     # Estilos da página About
│   │   └── about.page.spec.ts  # Testes da página About
│   ├── app.routes.ts           # Configuração de rotas
│   └── app.component.ts        # Componente raiz
├── assets/
│   └── profile.jpg             # Foto de perfil
└── theme/
    └── variables.scss          # Variáveis de tema
```

## 🎨 Personalização

### Alterar Informações do Estudante

Edite o arquivo `src/app/home/home.page.html` para alterar:
- Nome do estudante
- Matrícula
- Turma
- Unidade
- Turno
- Instituição
- Curso

### Alterar Cores

As cores principais estão definidas nos arquivos SCSS:
- Cor primária: `#667eea` (roxo/azul)
- Cor secundária: `#764ba2` (roxo escuro)

Edite os valores nos arquivos `home.page.scss` e `about.page.scss`.

### Alterar Foto de Perfil

Substitua o arquivo `src/assets/profile.jpg` pela sua foto desejada.

## 🚀 Build para Produção

```bash
ionic build
```

## 📱 Compilar para Plataformas Nativas

### iOS

```bash
ionic capacitor add ios
ionic capacitor build ios
```

### Android

```bash
ionic capacitor add android
ionic capacitor build android
```

## 🧪 Executar Testes

```bash
ng test
```

## 📚 Recursos Úteis

- [Documentação do Ionic](https://ionicframework.com/docs)
- [Documentação do Angular](https://angular.io/docs)
- [Documentação do Capacitor](https://capacitorjs.com/docs)

## 📝 Notas de Conversão

Este projeto foi convertido de **Ionic + React** para **Ionic + Angular**. As principais mudanças incluem:

- Substituição de componentes React por componentes Angular
- Uso de `@angular/router` em vez de `react-router-dom`
- Componentes standalone do Angular (sem NgModules)
- SCSS em vez de CSS puro
- TypeScript com decoradores do Angular

## 📄 Licença

Este projeto é fornecido como está para fins educacionais.

---

**Desenvolvido com ❤️ usando Ionic + Angular**
