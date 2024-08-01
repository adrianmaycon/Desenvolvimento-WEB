// Array de objetos representando livros
const books = [ 
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/51XULadddlL.jpg',
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    description: 'Uma das obras mais importantes da literatura espanhola e mundial, que narra as aventuras do cavaleiro idealista Dom Quixote e seu fiel escudeiro Sancho Pança.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/71Xta4Nf7uL._AC_UF1000,1000_QL80_.jpg',
    title: 'Orgulho e Preconceito',
    author: 'Jane Austen',
    description: 'Um clássico da literatura inglesa que aborda o romance entre Elizabeth Bennet e o arrogante Sr. Darcy, enquanto exploram questões de classe social e valores morais.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/51U-1ilSDEL._AC_UF1000,1000_QL80_.jpg',
    title: 'Cem Anos de Solidão',
    author: 'Gabriel García Márquez',
    description: 'Um épico da literatura latino-americana que narra a história da família Buendía ao longo de sete gerações na fictícia cidade de Macondo.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg',
    title: '1984',
    author: 'George Orwell',
    description: 'Um romance distópico que descreve um regime totalitário onde a liberdade individual é suprimida e a realidade é manipulada pelo governo.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/61ATa0Pc4AL._AC_UF1000,1000_QL80_.jpg',
    title: 'O Pequeno Príncipe',
    author: 'Antoine de Saint-Exupéry',
    description: 'Uma fábula filosófica sobre um príncipe que viaja por diferentes planetas, encontrando personagens peculiares que refletem aspectos da sociedade humana.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/71ZLavBjpRL._AC_UF1000,1000_QL80_.jpg',
    title: 'O Senhor dos Anéis',
    author: 'J.R.R. Tolkien',
    description: 'Uma trilogia de fantasia épica que segue a jornada do hobbit Frodo Bolsa de Bolseiro para destruir um anel mágico e derrotar o mal em Terra-média.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/81+dpv22LGL._AC_UF1000,1000_QL80_.jpg',
    title: 'Crime e Castigo',
    author: 'Fiódor Dostoiévski',
    description: 'Um romance psicológico que explora as complexidades da moralidade e do crime através da história de Raskólnikov, um estudante atormentado por sua própria consciência.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/71mFnG3Bn3L._AC_UF1000,1000_QL80_.jpg',
    title: 'A Metamorfose',
    author: 'Franz Kafka',
    description: 'Uma novela surrealista que conta a história de Gregor Samsa, um homem que se transforma em um inseto e enfrenta o isolamento e a alienação de sua família.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/91BsZhxCRjL._AC_UF1000,1000_QL80_.jpg',
    title: 'A Revolução dos Bichos',
    author: 'George Orwell',
    description: 'Uma sátira política que retrata uma fazenda onde os animais expulsam seus donos humanos e tentam estabelecer uma sociedade igualitária, que eventualmente degenera em tirania.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/91K-MrUTNOL._AC_UF1000,1000_QL80_.jpg',
    title: 'A Culpa é das Estrelas',
    author: 'John Green',
    description: 'Um romance contemporâneo que narra a história de Hazel Grace Lancaster, uma jovem com câncer, e Augustus Waters, um ex-jogador de basquete, que se apaixonam enquanto enfrentam suas doenças.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKq8IwSFaD37SR9lekMV_rZLoadAJT20bGdg&s',
    title: 'Memórias Póstumas de Brás Cubas',
    author: 'Machado de Assis',
    description: 'Um romance brasileiro que é uma sátira mordaz à sociedade brasileira do século XIX, narrado por um defunto autor que reflete sobre sua vida e suas imperfeições.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
  {
    pdf: "https://pnld.moderna.com.br/wp-content/uploads/2022/01/0099L21609130IM_Amostra_Dom-Quixote.pdf",
    imgSrc: 'https://m.media-amazon.com/images/I/81ibfYk4qmL._AC_UF1000,1000_QL80_.jpg',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J.K. Rowling',
    description: 'O primeiro livro da série Harry Potter, que segue as aventuras de um jovem bruxo, Harry, e seus amigos Hermione Granger e Ron Weasley enquanto frequentam a escola de magia de Hogwarts.',
    resume: "A história do engenhoso fidalgo Dom Quixote e de seu fiel escudeiro Sancho Pança conquista leitores geração após geração. O clássico de Miguel de Cervantes é considerado o expoente máximo da literatura espanhola e, em 2002, foi eleito por uma comissão de escritores de 54 países o melhor livro de ficção de todos os tempos. Em homenagem aos 400 anos de morte de Miguel de Cervantes, a Nova Fronteira traz ao público esta edição especial, com a obra integral em dois volumes. O texto de Cervantes é acompanhado das belíssimas ilustrações do francês Gustave Doré, um dos mais fantásticos artistas do século XIX."
  },
];

// Função para adicionar livros à página
function addBooksToPage(filteredBooks = books) {
  // Seleciona o elemento onde a lista de livros será exibida
  const bookList = document.querySelector('.book-list');

  // Limpa a lista de livros existente para evitar duplicação
  bookList.innerHTML = '';

  // Itera sobre a lista de livros filtrados e adiciona cada um ao DOM
  filteredBooks.forEach(book => {
    // Cria um novo elemento div para o livro
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');

    // Adiciona o conteúdo HTML para o livro
    bookElement.innerHTML = `
      <div class="flex">
        <img src="${book.imgSrc}" alt="">
        <div>
          <h3>${book.title}</h3>
          <p>Autor: ${book.author}</p>
          <p>Descrição: ${book.description}</p>
          <a href="detailsBook.html?bookId=${book.title}"><button type="button">Ver Livro</button></a>
        </div>
      </div>
    `;

    // Adiciona o elemento do livro à lista de livros
    bookList.appendChild(bookElement);
  });
}

// Função para configurar o formulário de contato
function viewDataForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  // Adiciona um ouvinte de evento para o envio do formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Constrói a mensagem a ser exibida na tag <p> com id "formMessage"
    const messageText = `Nome: ${name}<br>Email: ${email}<br>Mensagem: ${message}`;

    // Exibe a mensagem dentro do elemento <p id="formMessage">
    formMessage.innerHTML = messageText;

    // Limpar o formulário após exibir a mensagem (opcional)
    form.reset();
  })
}

// Função para pesquisar livros
function searchBooks() {
  // Seleciona o campo de entrada de pesquisa e obtém o valor
  const searchInput = document.getElementById('searchInput');
  const query = searchInput.value.toLowerCase();

  // Filtra a lista de livros com base na consulta de pesquisa
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(query)
  )

  // Atualiza a lista de livros exibida na página
  addBooksToPage(filteredBooks);
}

// Função para obter o valor dos parâmetros da URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Função para adicionar detalhes do livro na página
function addDetailsBook() {
  // Obtém o título do livro da URL
  const bookId = getQueryParam('bookId');

  // Encontra o livro correspondente ao bookId
  const bookData = books.find(book => book.title === bookId);

  // Exibe os detalhes do livro
  if (bookData) {
    document.getElementById('bookImage').src = bookData.imgSrc;
    document.getElementById('bookTitle').textContent = `Livro: ${bookData.title}`;
    document.getElementById('bookAuthor').textContent = `Autor: ${bookData.author}`;
    document.getElementById('bookDescription').textContent = `Resumo: ${bookData.resume}`;
  
    // Configurando o link do botão "Ler Livro" para ver o pdf
    const readBookButton = document.getElementById('readBookButton');
    readBookButton.href = bookData.pdf;
  } else {
    // Caso o livro não seja encontrado, exibe uma mensagem de erro
    document.getElementById('bookTitle').textContent = "Livro não encontrado";
  }
}

// Adiciona eventos de carregamento do DOM para funções específicas
document.addEventListener('DOMContentLoaded', viewDataForm); // Configura o formulário de contato quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', addDetailsBook); // Adiciona detalhes do livro quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  // Adiciona livros à página ao carregar
  addBooksToPage();

  // Adiciona um evento para atualizar a lista de livros enquanto o usuário digita no campo de pesquisa
  document.getElementById('searchInput').addEventListener('input', searchBooks);
});
