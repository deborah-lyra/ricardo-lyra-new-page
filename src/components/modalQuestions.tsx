"use client"
import { useState } from 'react';

export function ModalQuestions({ closeModal }: any) {
    
    const [answers, setAnswers] = useState<number[]>([0, 0, 0, 0, 0, 0]);

    const handleOptionClick = (questionIndex: number, value: number) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = value;
        setAnswers(updatedAnswers);
    };

    const totalScore = answers.reduce((sum, current) => sum + current, 0);

    const getResult = () => {
        if (totalScore >= 26 && totalScore <= 30) return 'Normal';
        if (totalScore >= 22 && totalScore <= 25) return 'Leve';
        if (totalScore >= 17 && totalScore <= 21) return 'Leve a Moderada';
        if (totalScore >= 11 && totalScore <= 16) return 'Moderada';
        if (totalScore >= 6 && totalScore <= 10) return 'Grave';
        return ' ';
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-bold mb-4">
                    Índice Internacional de Função Erétil - Simplificado (lIFE Simplificado)
                </h2>

                <div className="space-y-4">
                    {/* Pergunta 1 */}
                    <div>
                        <p className="font-bold">
                            1 - Com que frequência você consegue uma ereção durante a atividade sexual?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[0] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(0, value)}
                                >
                                    {value} = {['Não tentei ter relação sexual', 'Quase nunca / Nunca', 'Poucas vezes', 'Algumas vezes', 'Na maioria das vezes', 'Quase sempre / Sempre'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pergunta 2 */}
                    <div>
                        <p className="font-bold">
                            2 - Quando você tem ereções após estímulo sexual, com que frequência suas ereções são suficientemente rígidas para penetração?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[1] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(1, value)}
                                >
                                    {value} = {['Nenhuma atividade sexual', 'Quase nunca / Nunca', 'Poucas vezes', 'Algumas vezes', 'Na maioria das vezes', 'Quase sempre / Sempre'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pergunta 3 */}
                    <div>
                        <p className="font-bold">
                            3 - Quando você tentou ter uma relação sexual, com que frequência você conseguiu penetrar sua companheira?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[2] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(2, value)}
                                >
                                    {value} = {['Não tentei ter relação sexual', 'Quase nunca / Nunca', 'Poucas vezes', 'Algumas vezes', 'Na maioria das vezes', 'Quase sempre / Sempre'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pergunta 4 */}
                    <div>
                        <p className="font-bold">
                            4 - Durante a relação sexual, com que frequência você consegue manter a ereção depois de ter penetrado sua companheira?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[3] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(3, value)}
                                >
                                    {value} = {['Não tentei ter relação sexual', 'Quase nunca / Nunca', 'Poucas vezes', 'Algumas vezes', 'Na maioria das vezes', 'Quase sempre / Sempre'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pergunta 5 */}
                    <div>
                        <p className="font-bold">
                            5 - Durante a relação sexual, qual seu grau de dificuldade para manter a ereção até completar a relação sexual?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[4] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(4, value)}
                                >
                                    {value} = {['Não tentei ter relação sexual', 'Extremamente difícil', 'Muito difícil', 'Difícil', 'Um pouco difícil', 'Não é difícil'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pergunta 6 */}
                    <div>
                        <p className="font-bold">
                            6 - Qual seu grau de confiança de que você pode conseguir manter uma ereção?
                        </p>
                        <ul className="list-none pl-0">
                            {[0, 1, 2, 3, 4, 5].map((value) => (
                                <li
                                    key={value}
                                    className={`cursor-pointer p-2 border rounded-lg mb-1 ${answers[5] === value ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                    onClick={() => handleOptionClick(5, value)}
                                >
                                    {value} = {['Não tentei ter relação sexual', 'Muito baixo', 'Baixo', 'Moderado', 'Alto', 'Muito alto'][value]}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Exibir Resultado */}
                    <div className="mt-6">
                        <p className="font-bold">Pontuação total: {totalScore}</p>
                        <p className="font-bold">Seu nível de disfunção erétil é: {getResult()}</p>
                        <p>Em caso de dúvidas, agende uma consulta</p>
                    </div>

                    {/* Botão para fechar o modal */}
                    <button
                        className="bg-red-500 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={closeModal}
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}
