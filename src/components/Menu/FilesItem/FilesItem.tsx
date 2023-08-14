import { IonButton, useIonViewWillEnter } from "@ionic/react";
import { FC, useEffect, useState } from "react";
import { BsFileEarmarkPdf } from "react-icons/bs";
import FakeApiController from "../../../fakeApi/FakeApi";
import IPdfFile from "../../../interfaces/IPdfFile";
import styles from './FilesItem.module.css'

interface FilesItemProps {
    factory: string,
}


const FilesItem: FC<FilesItemProps> = ({
    factory,
}) => {

    const [files, setFiles] = useState<IPdfFile[]>([])

    const getAllFilesByFactory = () => {
        const files = FakeApiController.getFilesByFactory(factory.toLowerCase())

        setFiles(files);

    }

    useEffect(() => {
        getAllFilesByFactory();
    }, [

    ])

    return (
        files.map((file, index) => {
            return (
                <div key={index} className="ion-padding" slot="content">
                    <IonButton
                        href={`/filePage/${file.pdf}`}
                        className={styles.button}
                        color='danger'
                    >
                        <BsFileEarmarkPdf className={styles.icon} />
                        {file.name}
                    </IonButton>
                </div>
            )
        })
    )
}

export default FilesItem;