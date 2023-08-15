import IFactory from '../interfaces/IFactory';
import IPdfFile from '../interfaces/IPdfFile';

const getAllFactories = (): IFactory[] => {
    const factories: IFactory[] = [
        { id: 1, name: 'Wajnert' },
        { id: 2, name: 'Gala' },
        { id: 3, name: 'Feniks' },
    ];

    return factories.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const getFilesByFactory= (factoryName: string): IPdfFile[] => {

    const files: IPdfFile[] = [
        {name: 'Belluno', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Barcelona', factoryName: 'Wajnert'},
        {name: 'Alison', factoryName: 'Feniks'},
        {name: 'Belasdldsaddsuno', factoryName: 'Wajnert'},
        {name: 'Belluno',  factoryName: 'Gala'},
    ];

    const filteredFiles = files.filter(file => file.factoryName.toLowerCase() === factoryName.toLowerCase());

    const sortedFiles = filteredFiles.slice().sort((a, b) => a.name.localeCompare(b.name));
    
    return sortedFiles;
}

const FakeApiController = {
    getAllFactories,
    getFilesByFactory,
}

export default FakeApiController;
