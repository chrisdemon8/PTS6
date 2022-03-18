<?php

namespace App\Entity;
use PDO;
require_once __DIR__ . '../../Controller/Connection/Connection.php';

class Cases
{
    protected string $caseDescription;
    protected \DateTime $caseCreatedAt;
    protected string $caseStatus;
    protected \DateTime $caseEndDate;

    /**
     * @param $caseDescription
     * @param $caseCreatedAt
     * @param $caseStatus
     * @param $caseEndDate
     */
    public function __construct($caseDescription, $caseCreatedAt, $caseStatus, $caseEndDate)
    {
        $this->caseDescription = $caseDescription;
        $this->caseCreatedAt = $caseCreatedAt;
        $this->caseStatus = $caseStatus;
        $this->caseEndDate = $caseEndDate;
    }

    /**
     * @return mixed
     */
    public function getCaseDescription()
    {
        return $this->caseDescription;
    }

    /**
     * @param mixed $caseDescription
     * @return Cases
     */
    public function setCaseDescription($caseDescription)
    {
        $this->caseDescription = $caseDescription;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseCreatedAt()
    {
        return $this->caseCreatedAt;
    }

    /**
     * @param mixed $caseCreatedAt
     * @return Cases
     */
    public function setCaseCreatedAt($caseCreatedAt)
    {
        $this->caseCreatedAt = $caseCreatedAt;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseStatus()
    {
        return $this->caseStatus;
    }

    /**
     * @param mixed $caseStatus
     * @return Cases
     */
    public function setCaseStatus($caseStatus)
    {
        $this->caseStatus = $caseStatus;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCaseEndDate()
    {
        return $this->caseEndDate;
    }

    /**
     * @param mixed $caseEndDate
     * @return Cases
     */
    public function setCaseEndDate($caseEndDate)
    {
        $this->caseEndDate = $caseEndDate;
        return $this;
    }


    public function getCases()
    {
        $connection = getConnection();
        $sql = "SELECT * FROM `av_case`";
        $stmt = $connection->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }



}