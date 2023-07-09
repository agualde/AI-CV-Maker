# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user) 
    user ||= User.new # guest user (not logged in)

    can :create, :temporary_links

    can :manage, CoreInfo, user_id: user.id

    user.core_infos.each do |core_info|
      can :manage, Education, core_info_id: core_info.id
    end

    user.core_infos.each do |core_info|
      can :manage, Experience, core_info_id: core_info.id
    end

    return unless user.try(:admin?)
    can :manage, :all
  end
end
