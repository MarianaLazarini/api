import React, { Fragment } from 'react'
import axiosClient from '../../axiosClient';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useValidarDadosUser } from '../../rules/UserValidationRules';
import Input from '../../components/input/Input';

function UserFormStore() {
    const navigate = useNavigate();

    const {
        model,
        error,
        formValid,
        handleChangeField,
        handleBlurField
    } = useValidarDadosUser();

    // Função do tipo Anônima
    const onSubmit = (e) => {
        e.preventDefault();
        if (formValid) {
            axiosClient.post(`/user/store`, model)
                .then(() => {
                    console.log('Usuário incluído com sucesso');
                    navigate('/user/index');
                }).catch((error) => {
                    console.log(error);
                })
        }
    }

    return (
        <Fragment>
            <div className="display">
                <div className="card animated fadeinDown">
                    <h1>Inclusão de Usuário</h1>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <Input
                            id="name"
                            type="text"
                            value={model.name}
                            placeholder="Nome"
                            handleChangeField={handleChangeField}
                            handleBlurField={handleBlurField}
                            error={error.name}
                            mensagem={error.nameMensagem}
                        />
                        <Input
                            id="email"
                            type="text"
                            value={model.email}
                            placeholder="Email"
                            handleChangeField={handleChangeField}
                            handleBlurField={handleBlurField}
                            error={error.email}
                            mensagem={error.emailMensagem}
                        />
                        <Input
                            id="password"
                            type="text"
                            value={model.password}
                            placeholder="Senha"
                            handleChangeField={handleChangeField}
                            handleBlurField={handleBlurField}
                            error={error.password}
                            mensagem={error.passwordMensagem}
                        />
                        <button className="btn btn-edit">Salvar</button>
                        <Link
                            type='button'
                            className='btn btn-cancel'
                            to='/user/index'>
                            Cancelar
                        </Link>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default UserFormStore