import React from 'react'

const Skeleton = () => {
    return (

        <div class="row">
            <div class="ph-item">
                <div>
                    <div class="ph-row">
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-12 empty"></div>
                        <div class="ph-col-8 big"></div>
                        <div class="ph-col-4 empty"></div>

                    </div>
                </div>
                <div class="ph-col-4">
                    <div class="ph-picture"></div>
                </div>
            </div>
        </div>


    )
}

export default Skeleton