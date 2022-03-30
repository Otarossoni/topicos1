const UsuarioList = (props) => {
  return (
    <div>
      <h4>Listagem de Usuários</h4>
      <button
        onClick={props.onClickAtualizar}
        type="button"
        class="btn btn-secondary"
      >
        Atualizar Lista
      </button>
      <button type="button" class="btn btn-success">
        Inserir
      </button>
      <table className="table">
        <thead>
          <tr>
            {" "}
            <th>Index</th>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Celular</th> <th>Operações</th>
          </tr>
        </thead>
        <tbody>
          {props.usuario.length > 0 ? (
            props.usuario.map((o, index) => (
              <tr key={index}>
                <td>{index}</td> <td>{o.id}</td> <td>{o.nome}</td>{" "}
                <td>{o.email}</td> <td>{o.celular}</td>
                <td>
                  <button
                    onClick={() => props.editar(o.id)}
                    type="button"
                    class="btn btn-warning"
                  >
                    Alterar
                  </button>
                  <button
                    onClick={() => props.excluir(o.id)}
                    type="button"
                    class="btn btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              {" "}
              <td colSpan={3}>Nenhum usuário.</td>{" "}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default UsuarioList;
