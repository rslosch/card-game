class SuggestedCardsController < ApplicationController
    def create
        suggested_card = SuggestedCard.create(suggested_card_params)
        if suggested_card.valid?
            render json: suggested_card
        else
            render json: {errors: suggested_card.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def suggested_card_params
        params.require(:suggested_card).permit(:card_id, :content)
    end
end
