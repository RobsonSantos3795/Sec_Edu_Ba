document.addEventListener('DOMContentLoaded', () => {
    const dashboardLinksContainer = document.getElementById('dashboard-links');

    // Aqui você pode adicionar, remover ou editar seus dashboards.
    // Basta seguir o mesmo padrão: { name: '...', description: '...', url: '...' }
    const dashboards = [
        { 
            name: 'Dashboard da CST - Terceirizados', 
            description: 'Visão geral de todos os postos Terceirizados.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiZDhmMjA3NTUtNzgzYi00NDdlLWFmM2MtM2YzY2YwZTI4OWI3IiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        { 
            name: 'Dashboard da CST - Maps', 
            description: 'Acompanhamento de postos dos vigilantes.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiZWM1MjU5ZmYtMmE0Ni00YmJiLWE0MGQtZjA4Yzc4MDQ2MGExIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        { 
            name: 'Dashboard da CST - Reda', 
            description: 'Painel com registro de Redas.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiOWEwOWViNjMtNGRjMC00MDdmLWJhOTktMzJiNTIwOWE4YTk5IiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        { 
            name: 'Dashboard Convênio - Desembolso', 
            description: 'Dashboard para gestão de Desembolso.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiYjdlNjZhMGUtYjNmOC00NTIxLTk5MDktN2NmNzc5ZGU5ZTNlIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        { 
            name: 'Dashboard Convênio - Pleitos', 
            description: 'Acompanhamento de Pleitos.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiYzVlYzQ1YTctZjNjMS00ZGE4LTkzMmYtNDg1ZDNmZDc3ZDMxIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        { 
            name: 'Dashboard Convênio - Prestação de Contas', 
            description: 'Prestação de contas do Convênio.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiN2FjN2VmMzQtNjY2ZC00MWQ4LTkwMjItMDhmZmM4Y2MyZWNiIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9' 
        },
        {
            name: 'Dashboard Diretoria Financeira - Termo de Colaboração MROSC',
            description: 'Prestação de contas da Diretoria Financeira.', 
            url: 'https://app.powerbi.com/view?r=eyJrIjoiZjM5MDhiYjEtMWVhZS00M2NlLWFhMzctMmQ3NjNhOWJmZGFmIiwidCI6Ijc3ODgzYzNiLWYwNjMtNDllYy1hMDA2LTYyYjljNWFjYTQ4ZSJ9'
        }
    ];

    // Função para criar o HTML de um único cartão de link
    function createLinkCard(dashboard) {
        const card = document.createElement('div');
        card.className = 'link-card';
        card.innerHTML = `
            <h3>${dashboard.name}</h3>
            <p>${dashboard.description}</p>
            <a href="${dashboard.url}" target="_blank">Acessar Painel</a>
        `;
        return card;
    }

    // Renderiza todos os dashboards na página
    dashboards.forEach(dashboard => {
        const card = createLinkCard(dashboard);
        dashboardLinksContainer.appendChild(card);
    });

});
