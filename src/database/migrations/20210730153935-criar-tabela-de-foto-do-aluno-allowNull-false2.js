module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.changeColumn(
            'fotos', {
            aluno_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        },
        );
    },

    down: () => { },
};
