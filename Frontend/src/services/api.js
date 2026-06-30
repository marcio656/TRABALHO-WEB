const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const equipamentoService = {
    async listar() {
        const response = await fetch(`${API_URL}/equipamentos`)
        if (!response.ok) throw new Error('Erro ao listar equipamentos')
        return await response.json()
    },
    async criar(equipamento) {
        const response = await fetch(`${API_URL}/equipamentos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(equipamento)
        })
        if (!response.ok) throw new Error('Erro ao criar equipamento')
        return await response.json()
    }
}

export const cidadeService = {
    async listar() {
        const response = await fetch(`${API_URL}/cidades`)
        if (!response.ok) throw new Error('Erro ao listar cidades')
        return await response.json()
    },
    async criar(cidade) {
        const response = await fetch(`${API_URL}/cidades`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cidade)
        })
        if (!response.ok) throw new Error('Erro ao criar cidade')
        return await response.json()
    }
}

export const servicoService = {
    async listar() {
        const response = await fetch(`${API_URL}/servicos`)
        if (!response.ok) throw new Error('Erro ao listar serviços')
        return await response.json()
    },
    async criar(servico) {
        const response = await fetch(`${API_URL}/servicos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servico)
        })
        if (!response.ok) throw new Error('Erro ao criar serviço')
        return await response.json()
    }
}

export const funcionarioService = {
    async listar() {
        const response = await fetch(`${API_URL}/funcionarios`)
        if (!response.ok) throw new Error('Erro ao listar funcionários')
        return await response.json()
    },
    async criar(funcionario) {
        const response = await fetch(`${API_URL}/funcionarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(funcionario)
        })
        if (!response.ok) throw new Error('Erro ao criar funcionário')
        return await response.json()
    }
}