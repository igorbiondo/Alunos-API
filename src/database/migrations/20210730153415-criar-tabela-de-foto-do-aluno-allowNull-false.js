module.exports = {
    up: async (queryInterface) => {
        await queryInterface.changeColumn(
            'fotos', {
            aluno_id: {
                allowNull: false,
            },
        },
        );
    },

    down: () => { },
};
