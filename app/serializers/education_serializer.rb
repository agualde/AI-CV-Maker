class EducationSerializer < ActiveModel::Serializer
  attributes :id, :header, :sub_header,:description
  
  def header
    object.institution
  end

  def sub_header
    object.degree
  end
end
